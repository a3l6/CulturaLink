import hashlib
#from cryptography.hazmat.primitives import constant_time


def hashpw(username: str, password: str) -> str:
    hash = hashlib.sha256(f"{password}{username}".encode()).hexdigest()

    return hash


def verify(username: str, password: str, hashed_password: str) -> bool:
    potential_hash = hashpw(username, password)

    if password == hashed_password:
        return True
    return False
