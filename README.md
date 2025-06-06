No problem, here's the English translation of the GitHub repository README:

# MySQL Query Assistant

An AI-powered MySQL query builder tool – a database management platform powered by OpenRouter and DeepSeek models.

-----

## Features

  * **Natural Language Processing**: Translates commands like "List all users" into MySQL queries.
  * **Intelligent Query Generation**: Analyzes the database schema to produce optimized SQL.
  * **Security-Focused**: Executes `SELECT` queries only.
  * **Automatic Schema Analysis**: Automatically discovers tables and columns.
  * **Multi-AI Model Support**: Supports models like DeepSeek, GPT-4, and Claude.

-----

## Technologies

  * **Backend**: Flask, MySQL Connector, OpenAI Client
  * **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
  * **AI**: OpenRouter API, DeepSeek Chat

-----

## Installation

### 1\. Clone the Project

```bash
git clone https://github.com/safagoek/mysql-query-assistant.git
cd mysql-query-assistant
```

### 2\. Create a Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # Linux/macOS
# or
venv\Scripts\activate     # Windows
```

### 3\. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4\. Create an Environment File (.env)

```env
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxx
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=your_database
SECRET_KEY=your_secret_key
DEBUG=True
```

### 5\. Start the Application

```bash
python app.py
```

Navigate to `http://localhost:5000` in your browser.

-----

## Usage

1.  **Connect to the Database**: Select your database from the left panel.
2.  **Write Your Request in Natural Language**:
      * "List all users"
      * "Get the last 10 users"
      * "Find users with gmail email addresses"
3.  **Let the AI Generate the Query**: Click the "Generate Query" button.
4.  **See the Results**: View the data by clicking "Run Query".

-----

## Project Structure

```
mysql-query-assistant/
├── app.py              # Main Flask application
├── config.py           # Configuration
├── requirements.txt    # Dependencies
├── database/           # Database modules
├── services/           # AI and query services
├── static/             # CSS and JavaScript
└── templates/          # HTML templates
```

-----

## OpenRouter API Key

1.  Create an account on [OpenRouter.ai](https://openrouter.ai).
2.  Obtain your API key from the Dashboard.
3.  Add it to your `.env` file.

-----

## Contributing

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'Add amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

-----

## License

MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

-----

## Contact

**Safa Gök**

  * GitHub: [@safagoek](https://github.com/safagoek)
  * LinkedIn: [safa-gök](https://www.linkedin.com/in/safa-g%C3%B6k/)
