import asyncio
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.bot.main import bot, dp
from app.api.routers import router as api_router

@asynccontextmanager
async def lifespan(app:FastAPI):
    loop = asyncio.get_event_loop()
    stop_event = asyncio.Event()

    print('Бот запускается')
    polling_task = asyncio.create_task(dp.start_polling(bot))

    yield

    print('Бот останавливается')
    polling_task.cancel()
    await bot.session.close()

app = FastAPI(lifespan=lifespan)

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
