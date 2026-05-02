import os
from groq import Groq

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def get_ai_response(text: str):
    chat_completion = client.chat.completions.create(
        messages=[{"role": "user", "content": text}],
        model="llama3-8b-8192",
    )
    return chat_completion.choices[0].message.content