
// Translations dictionary
const translations = {
    'tr': {
        // Navigation and general
        'app_title': 'MySQL Sorgu Asistanı',
        
        // Database connection
        'database_connection': 'Veritabanı Bağlantısı',
        'select_database': 'Veritabanı Seç',
        'select_database_placeholder': 'Veritabanı seçin...',
        'refresh': 'Yenile',
        'connect': 'Bağlan',
        
        // Schema info
        'database_schema': 'Veritabanı Şeması',
        'database': 'Veritabanı',
        
        // Query generation
        'ai_query_generator': 'AI Sorgu Oluşturucu',
        'what_do_you_want': 'Ne yapmak istiyorsunuz?',
        'example_prompt': 'Örnek: Tüm kullanıcıları listele',
        'generate_query': 'Sorgu Oluştur',
        'generating': 'Oluşturuluyor...',
        
        // Query results
        'generated_query': 'Oluşturulan Sorgu',
        'copy': 'Kopyala',
        'execute_query': 'Sorguyu Çalıştır',
        'query_results': 'Sorgu Sonuçları',
        'no_results': 'Sonuç bulunamadı',
        
        // Alerts
        'databases_load_error': 'Veritabanları yüklenemedi',
        'connection_error': 'Bağlantı hatası',
        'please_select_database': 'Lütfen bir veritabanı seçin',
        'connection_success': 'Veritabanına başarıyla bağlanıldı',
        'please_enter_prompt': 'Lütfen ne yapmak istediğinizi yazın',
        'query_generated_success': 'Sorgu başarıyla oluşturuldu',
        'query_generation_error': 'Sorgu oluşturulamadı',
        'no_query_to_execute': 'Çalıştırılacak sorgu bulunamadı',
        'query_executed_success': 'Sorgu başarıyla çalıştırıldı',
        'rows_returned': 'satır döndü',
        'query_execution_error': 'Sorgu hatası',
        'query_copied': 'Sorgu kopyalandı'
    },
    'en': {
        // Navigation and general
        'app_title': 'MySQL Query Assistant',
        
        // Database connection
        'database_connection': 'Database Connection',
        'select_database': 'Select Database',
        'select_database_placeholder': 'Choose a database...',
        'refresh': 'Refresh',
        'connect': 'Connect',
        
        // Schema info
        'database_schema': 'Database Schema',
        'database': 'Database',
        
        // Query generation
        'ai_query_generator': 'AI Query Generator',
        'what_do_you_want': 'What do you want to do?',
        'example_prompt': 'Example: List all users',
        'generate_query': 'Generate Query',
        'generating': 'Generating...',
        
        // Query results
        'generated_query': 'Generated Query',
        'copy': 'Copy',
        'execute_query': 'Execute Query',
        'query_results': 'Query Results',
        'no_results': 'No results found',
        
        // Alerts
        'databases_load_error': 'Failed to load databases',
        'connection_error': 'Connection error',
        'please_select_database': 'Please select a database',
        'connection_success': 'Successfully connected to the database',
        'please_enter_prompt': 'Please enter what you want to do',
        'query_generated_success': 'Query successfully generated',
        'query_generation_error': 'Failed to generate query',
        'no_query_to_execute': 'No query to execute',
        'query_executed_success': 'Query executed successfully',
        'rows_returned': 'rows returned',
        'query_execution_error': 'Query error',
        'query_copied': 'Query copied'
    }
};

// Current language
let currentLanguage = 'tr';

// Function to get translation for a key
function t(key) {
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    
    // Fallback to Turkish if translation not found
    if (translations['tr'] && translations['tr'][key]) {
        return translations['tr'][key];
    }
    
    // Return the key itself if no translation found
    return key;
}

// Change language
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        updatePageTranslations();
        
        // Save language preference
        localStorage.setItem('preferred_language', lang);
        
        // Sync with server
        fetch('/set-language', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                language: lang
            })
        }).catch(error => {
            console.error('Error saving language preference:', error);
        });
    }
}

// Update all translatable elements on the page
function updatePageTranslations() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (key) {
            // For inputs, update placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = t(key);
                }
            } 
            // For normal elements, update text content
            else {
                element.textContent = t(key);
            }
        }
    });
    
    // Update the html lang attribute
    document.documentElement.lang = currentLanguage;
}

// Initialize language settings
function initLanguage() {
    // First check if there's a server-side preference
    fetch('/get-language')
        .then(response => response.json())
        .then(data => {
            if (data.language && translations[data.language]) {
                currentLanguage = data.language;
            } else {
                // If no server preference, check local storage
                const savedLang = localStorage.getItem('preferred_language');
                if (savedLang && translations[savedLang]) {
                    currentLanguage = savedLang;
                    
                    // Sync with server
                    fetch('/set-language', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            language: savedLang
                        })
                    }).catch(error => {
                        console.error('Error saving language preference:', error);
                    });
                }
            }
            
            // Update the language selector
            const langSelector = document.getElementById('languageSelector');
            if (langSelector) {
                langSelector.value = currentLanguage;
            }
            
            // Apply translations
            updatePageTranslations();
        })
        .catch(error => {
            console.error('Error fetching language preference:', error);
            
            // Fallback to local storage
            const savedLang = localStorage.getItem('preferred_language');
            if (savedLang && translations[savedLang]) {
                currentLanguage = savedLang;
            }
            
            // Update the language selector
            const langSelector = document.getElementById('languageSelector');
            if (langSelector) {
                langSelector.value = currentLanguage;
            }
            
            // Apply translations
            updatePageTranslations();
        });
}

// Set up language change listener
document.addEventListener('DOMContentLoaded', function() {
    const langSelector = document.getElementById('languageSelector');
    
    if (langSelector) {
        langSelector.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // Initialize language
    initLanguage();
});
