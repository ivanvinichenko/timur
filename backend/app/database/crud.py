from sqlalchemy.ext.asyncio import AsyncSession
from .models import UserRequest

async def create_user_request(db:AsyncSession, name:str, phone_number:str):
    new_item = UserRequest(
        name = name,
        phone_number = phone_number,
    )
    db.add(new_item)
    await db.flush()
    return new_item