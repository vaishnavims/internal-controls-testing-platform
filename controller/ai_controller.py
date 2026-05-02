from fastapi import APIRouter
from model.request_model import AIRequest
from services.ai_service import process_text

router = APIRouter()

@router.post("/ai")
def ai_response(request: AIRequest):
    result = process_text(request.text)
    return {"response": result}