
// You need to run this cUrl command to get the Bearer token that's good for 24 hours
// curl -d "grant_type=client_credentials&client_id=6lgm3bsUbm0tPGAxqQ6IYARPFlSYO3zYHlvaIEY4RLMir1YoL7&client_secret=CQlaQsiUtIQ1wMfqpHEy0KSiNoDbnVhEeAlwm4LF" https://api.petfinder.com/v2/oauth2/token

function getDogs() {
  axios.get('https://api.petfinder.com/v2/animals?type=dog&page=2', {
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRjMGY0NWY0YjdmNDBkMDhiNWUxOTVjZTg3MzM3NTI3MWI0MDczNzFjYTgzYjJlYjQ4Njc1YjRmYjkxZGZjZmNlNzI0NGE0YjQ3MWU4Zjg3In0.eyJhdWQiOiI2bGdtM2JzVWJtMHRQR0F4cVE2SVlBUlBGbFNZTzN6WUhsdmFJRVk0UkxNaXIxWW9MNyIsImp0aSI6ImRjMGY0NWY0YjdmNDBkMDhiNWUxOTVjZTg3MzM3NTI3MWI0MDczNzFjYTgzYjJlYjQ4Njc1YjRmYjkxZGZjZmNlNzI0NGE0YjQ3MWU4Zjg3IiwiaWF0IjoxNTU0MDgxMzkyLCJuYmYiOjE1NTQwODEzOTIsImV4cCI6MTU1NDA4NDk5Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZLZniWe36kM-yeZpbN6f-awr09aCr_NqDDln_0FVG22Vx3HyaKzl4kBuhoVhO19Qb-Ui89_uzJ_6yNKsuJbADj1JJYSMH7xYYYKQpJi0XHjifRiZlsVPc8EqNem1B02suswiJgrf5gb00UnyEn1kRE4efN5F-7t19zOoa_ECmaVjn7EVfwoGHQtHgGqVgV5gfXxSXi4HyOzL6fuujno-jGBSsCc5ZUKsbN5l2ZvQ3KYgqyFuW54-oxIs6KuF0z57zqef8K0izc8NDVIroGOtwZ5eyvGl2-n07aVdL7JoQdRp6ldoJd_S3TMzodBDDEiQcBwXLTCAf-HZXv6ez3qgQQ'
    }
  })
      .then(response => {
        console.log(response.data);
        var gallery = document.querySelector('#gallery');
        var content = '';
        if (!gallery) return;
        gallery.innerHTML = '<div id="gallery">\n' +
            '  <p>Loading...</p>\n' +
            '</div>'
        
        // Loop through the data and generate our markup
        response.data.animals.forEach(function (animal) {
          content +=
              '<div class="grid">' +
              '<a href="' + animal.url + '">' +
              '<img alt="' + animal.name + '" src="' + animal.photos[0]['full'] + '">' +
              '</a>' +
              '</div>';
        })
        
        // Inject our content into the DOM
        gallery.innerHTML = '<div class="row">' + content + '</div>';
      })
      .catch(error => {
        console.log(error);
      });
}

const clearDogs = () => {
  let gallery = document.querySelector('#gallery');
  if (!gallery) return;
  gallery.innerHTML = '<div id="gallery">\n' + '</div>'
}
