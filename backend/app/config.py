from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DB_URL : str
    BOT_TOKEN : str

    class Config:
        env_file = '.env'

settings = Settings()