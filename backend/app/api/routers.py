from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from app.database.crud import create_user_request
from app.database.sessions import get_db
from app.bot.main import bot


router = APIRouter()


class UserData(BaseModel):
    name:str
    phone_number:str

@router.post('/submit-data')
async def handle_data(data: UserData, db: AsyncSession = Depends(get_db)):
    db_item = await create_user_request(db, data.name, data.phone_number)

    await bot.send_message(
        chat_id='7712168206',
        text=f"""<b>Новая заявка:</b>
        Имя: {data.name}
        Номер: {data.phone_number}""",
            parse_mode='HTML'
        )

    return {
        'status':'success',
        'id': db_item.id
        }