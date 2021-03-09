# Mail-system
An internal mail management system built for [ArcelorMittal Dofasco](https://dofasco.arcelormittal.com/).
## Built With
- Django (Ptyhon 3.9+)
- React Hooks
- React Redux 

## Setup and Run
To run this project, have ```yarn/npm``` and ```pipenv``` installed locally:
1. Install project dependencies. ```$ pipenv install``` ```$ yarn install```
2. Run ```$ yarn/npm run dev``` and ```$ python manage.py runsever```
3. Open your browser and point to localhost:8000 and you should see the application is working.
## Deploy with Docker 
To run as a docker container, have [docker](https://docs.docker.com/engine/install/) installed locally:
1. Pull latest image from remote hub. ```$ pull caph/mail_system```
2. Check local images. ```$ docker images```
3. Run image as container.  ```$ docker run -d -p 80:80 [image_id]/[tag]```
4. Check active containers. ```$ docker ps```
5. Open your browser and point to localhost:80 and you should see the application is working.
## License
[MIT](https://choosealicense.com/licenses/mit/)
