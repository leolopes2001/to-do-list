const list = document.querySelector('#list')
const btn_add = document.getElementById('add_btn')
const text = document.getElementById('text_input')
const btns_delete = document.querySelectorAll('btn_delete')


let all_task = []

btn_add.addEventListener('click', add_task)


function show_taks() {
    list.innerHTML = ''

    if (all_task != null) {
        all_task.forEach((obj, index) => {


            const li = document.createElement('li')
            if (obj.status == true && obj.task !== "") {
                li.innerHTML =
                    `
                <button class="btn_rocket" onClick="green_card(${index})">
                    <i class="fas fa-rocket"></i>
                </button>

                <p class="task_name">${obj.task}</p>

                <button class="btn_delete" onClick="delete_task(${index})">
                    <i class="fas fa-trash"></i>               
                </button>     
            `
                li.setAttribute('class', 'done')
                list.appendChild(li)
            } else if (obj.status == false && obj.task !== "") {
                li.innerHTML = `
                <button class="btn_rocket" onClick="green_card(${index})">
                    <i class="fas fa-rocket"></i>
                </button>

                <p class="task_name">${obj.task}</p>

                <button class="btn_delete" onClick="delete_task(${index})">
                    <i class="fas fa-trash"></i>               
                </button>     
            `
                list.appendChild(li)
            }
        })
    }
    text.value  = ""
}


function green_card(index) {
    all_task[index].status = !all_task[index].status

    show_taks()
}


function delete_task(index) {
    all_task.splice(index, 1)

    localStorage.clear()
    localStorage.setItem('myList', JSON.stringify(all_task))


    show_taks()
}


function add_task() {
    if (text.value === "") {
        console.log("opa")
        window.alert('Adicione uma tarefa!')
        return
    } else {
        
        all_task.push({
            task: text.value,
            status: false
        })
        localStorage.setItem('myList', JSON.stringify(all_task))
        show_taks()
    }

}

function reload() {
    
    let myTaks = JSON.parse(localStorage.getItem('myList'))

    if (myTaks === null) {
        show_taks()
    } else {
        all_task = myTaks
        show_taks()
    }

   
}

reload()
