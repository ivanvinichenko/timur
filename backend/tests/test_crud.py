import pytest
from unittest.mock import AsyncMock, MagicMock
from app.database.crud import create_user_request

@pytest.mark.asyncio
async def test_create_user_request():
    db_session = AsyncMock()
    db_session.add = MagicMock()

    test_name='Artem'
    test_phone='+7777777777'

    result = await create_user_request(db=db_session, name=test_name, phone_number=test_phone)

    db_session.add.assert_called_once()
    db_session.flush.assert_called_once()

    assert result.name == test_name
    assert result.phone_number == test_phone

@pytest.mark.asyncio
async def test_create_request_user():
    db_session = AsyncMock()
    db_session.flush.side_effect = Exception('Database error')

    with pytest.raises(Exception) as excinfo:
        await create_user_request(db_session, "Artem","+7777777777")

    assert str(excinfo.value)=="Database error"
    db_session.rollback.assert_called_once()