/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';

const baseUrl = 'https://mate-academy.github.io/phone-catalogue-static/api';

const request = (url) => {
  return fetch(`${baseUrl}${url}`)
    .then(response => {
      return response.json();
    });
};

const getPhones = () => {
  const resolver = (resolve, reject) => {
    resolve(request('/phones.json'));

    setTimeout(() => {
      reject('Timeout');
    }, 5000);
  };

  return new Promise(resolver);
};

const getlist = getPhones();

getlist
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.warn(error);
  });

const getPhonesDetails = (id) => {
  const resolver = (resolve, reject) => {
    resolve(request(`/phones/${id}.json`));

    reject(new Error('No such id'));
  };

  return new Promise(resolver);
};

const getPhoneId = getPhonesDetails('motorola-atrix-4g');

getPhoneId
  .then(
    result => console.log(result)
  )
  .catch(
    error => console.log(error)
  );

const phonesWithDetails = getPhones();

phonesWithDetails
  .then(
    list => Promise.all(
      list.map(phoneInfo => {
        // ????
      }
      )
    )
  );
