/* eslint-disable import/prefer-default-export */
export const getAllData = (data) => {
  const stud = [];
  const stud2 = [];
  const stud3 = [];
  const stud4 = [];
  const stud5 = [];
  const sub = [
    {
      name: 'Bangla',
      user: stud,
    },
    {
      name: 'English',
      user: stud2,
    },
    {
      name: 'Math',
      user: stud3,
    },
    {
      name: 'Physics',
      user: stud4,
    },
    {
      name: 'Islam',
      user: stud5,
    },
  ];
  for (let i = 0; i < data.getAll.length; i += 1) {
    const student = data.getAll[i];
    for (let j = 0; j < student.subject.length; j += 1) {
      if (student.subject[j] === 'Bangla') {
        const { name } = student;
        stud.push(name);
      }

      if (student.subject[j] === 'English') {
        const { name } = student;
        stud2.push(name);
      }
      if (student.subject[j] === 'Math') {
        const { name } = student;
        stud3.push(name);
      }
      if (student.subject[j] === 'Physics') {
        const { name } = student;
        stud4.push(name);
      }
      if (student.subject[j] === 'Islam') {
        const { name } = student;
        stud5.push(name);
      }
    }
  }

  return sub;
};
