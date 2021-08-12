venv:
	python3 -m venv venv

requirements:
	pip3 install -r app/requirements.txt

start:
	uvicorn app.main:app --reload