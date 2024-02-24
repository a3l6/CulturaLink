import hashlib
from cryptography.hazmat.primitives import constant_time


def hashpw(username: str, password: str) -> str:
    hash = hashlib.sha256(f"{password}{username}".encode()).hexdigest()

    return hash


def verify(username: str, password: str, hashed_password: str) -> bool:
    potential_hash = hashpw(username, password)

    if constant_time.bytes_eq(potential_hash.encode(), hashed_password.encode()):
        return True
    return False
