const searchProfile = document.querySelector('#searchProfile');
const profile = new Profile();

searchProfile.addEventListener('keyup', (event) => {
   let text = event.target.value;
   if (text !== '') {
      profile.getProfile(text)
         .then(res => {
            if (res.profile.length === 0) {
               
            } else {
               console.log(res.profile);
            }
         })
   }
})