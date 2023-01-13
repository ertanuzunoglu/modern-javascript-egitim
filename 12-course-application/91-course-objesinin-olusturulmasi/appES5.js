
// Course  classını burada oluşturuyoruz.
function Course (title, instructor, image) {
   this.title = title;
   this.instructor = instructor;
   this.image = image;
}

document.getElementById('new-course').addEventListener('submit', function (e) {
   
   const title = document.getElementById('title').value;
   const instructor = document.getElementById('instructor').value;
   const image = document.getElementById('image').value;
   
   //create course object: Course classı üzerinden course objemizi oluşturuyoruz.
   const course = new Course(title, instructor, image);
   
   //

   e.preventDefault();
})