_.chain(enrollment)
    .filter(student => student.enrolled > 1)
    .pluck('grade')
    .average()
    .value(); //-> 90
