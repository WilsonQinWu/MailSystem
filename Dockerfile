
# https://medium.com/swlh/setting-up-a-secure-django-project-repository-with-docker-and-django-environ-4af72ce037f0

FROM python:3.9
# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# Create a working directory for the django project
WORKDIR /code
# Copy requirements to the container
COPY Pipfile Pipfile.lock /code/
# Install the requirements to the container
RUN pip install pipenv && pipenv install --system
# Copy the project files into the working directory
COPY . /code/
# Open a port on the container
EXPOSE 8000

