import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const CONSORTIUM = 'consortium';
export const PERSON = 'person';
export const CERTIFICATE = 'certificate';

export const ENTITIES = [
    CONSORTIUM,
    PERSON,
    CERTIFICATE
]

export const BASE = process.env.API_SERVER ||  'http://localhost:10012';


export const fetchEntities = () => {
  console.log('Fetchinnnng')
  return dispatch => {
    console.log('HOLAAA', dispatch)

    for (let i = 0; i < ENTITIES.length; i++) {
      const entity = ENTITIES[i]
      console.log('Entity', entity)
      const endpoint = `${BASE}/${entity}`;
      dispatch(fetchRequestEntity(entity))
      axios.get(endpoint)
      .then(response => {
        if (response) {
            dispatch(fetchDataSucess(entity, response))
        }
      })
      .catch(error => dispatch(() => {
          console.log('DEBUG error', error)
          return ({type: `${entity} ${FETCH_DATA_FAILURE}`})
      }))
    }
  };
};

export const fetchDataSucess = (entity, data) => {
  return ({
    type: `${entity} ${FETCH_DATA_SUCCESS}`,
    payload: data
  })
}
export const fetchRequestEntity = (entity) => {
    return ({
            type: `${entity} ${FETCH_DATA_REQUEST}`,
        })
}
