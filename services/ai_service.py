from services.groq_client import get_ai_response

def process_text(text: str):
    response = get_ai_response(text)
    return response