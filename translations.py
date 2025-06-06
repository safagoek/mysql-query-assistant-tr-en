
translations = {
    'tr': {
        'connection_error': 'Bağlantı hatası',
        'schema_read_error': 'Bağlantı başarılı ancak şema okunamadı',
        'connect_first': 'Önce bir veritabanına bağlanın',
        'ai_service_error': 'AI servisi başlatılamadı',
        'query_generation_error': 'Sorgu oluşturma hatası',
        'query_not_found': 'Sorgu bulunamadı',
        'security_select_only': 'Güvenlik nedeniyle sadece SELECT sorguları çalıştırılabilir',
        'query_execution_error': 'Sorgu çalıştırma hatası',
        'database_list_error': 'Veritabanları listelenemedi',
        'openrouter_success': 'OpenRouter servisi başarıyla başlatıldı',
        'openrouter_error': 'OpenRouter servisi hatası'
    },
    'en': {
        'connection_error': 'Connection error',
        'schema_read_error': 'Connection successful but schema could not be read',
        'connect_first': 'Please connect to a database first',
        'ai_service_error': 'AI service could not be started',
        'query_generation_error': 'Query generation error',
        'query_not_found': 'Query not found',
        'security_select_only': 'For security reasons, only SELECT queries can be executed',
        'query_execution_error': 'Query execution error',
        'database_list_error': 'Could not list databases',
        'openrouter_success': 'OpenRouter service started successfully',
        'openrouter_error': 'OpenRouter service error'
    }
}

def get_translation(key, lang='tr'):
    """Get translation for a key in the specified language"""
    if lang not in translations:
        lang = 'tr'  # Fallback to Turkish
        
    if key in translations[lang]:
        return translations[lang][key]
    
    # Fallback to the key itself if not found
    return key
