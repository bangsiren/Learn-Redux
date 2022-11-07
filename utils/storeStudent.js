function addStudentToStorage(student) {
    return new Promise(async (resolve, reject) => {
        try {
            let allStudents = await getStudentsFromStorage();
            allStudents.push(student);
            localStorage.setItem('students', JSON.stringify(allStudents));
            resolve(allStudents);
        } catch (er) {
            reject('ERROR ADDING A');
        }
    })
}
function increamentStudentAttendanceInStorage() {
    return new Promise(async (resolve, reject) => {
        try {
            let allStudents = await getStudentsFromStorage();
            for(let i = 0; i<allStudents.length; i++) {
                if(allStudents>0) {
                    allStudents[i].attendance+=1
                }
                resolve(allStudents)
            }
        } catch (error) {
            reject('Error While Incrementing');
        }
    })
}

const getStudentsFromStorage = () => {
    return new Promise((resolve, reject) => {
        try {
            let std = localStorage.getItem('students')
            if (std == null) {
                resolve([])
            } else {
                resolve(JSON.parse(std))
            }
        } catch (error) {
            reject("Errors Getting Students")
        }
    })
}

export {
    getStudentsFromStorage,
    addStudentToStorage,
    increamentStudentAttendanceInStorage
}