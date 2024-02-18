// -----Common function-------

function get_element_by_id(elementID) {
    return document.getElementById(elementID);
}


function set_element_by_id(elementID, value) {
    document.getElementById(elementID).innerText = value;
}


function create_items(seatInner,ticketPrice) {
    let new_li = document.createElement("li");
    
    let p1 = document.createElement("p");
    p1.innerText = seatInner;

    let p2 = document.createElement("p");
    p2.innerText = "Economy";
    let p3 = document.createElement("p");
    p3.innerText = ticketPrice;

    new_li.appendChild(p1)
    new_li.appendChild(p2)
    new_li.appendChild(p3)
    get_element_by_id('select-ticket').appendChild(new_li)
}



// -------Main function hare-----------
let counter = 0;
let ticket_total = 0;
let check_arr = [];
let seat_items = document.getElementsByClassName('sit-button');

for (const seat of seat_items) {
    seat.addEventListener('click', function (e) {
        check_arr.push(seat);

        if (check_arr.length <= 4) {
            // ---counter and available site count
            ticket_total += parseInt(get_element_by_id('seat-price').innerText);
            counter += 1;
            let seat_available = parseInt(get_element_by_id('available-seat').innerText);
            set_element_by_id('available-seat', seat_available - 1)
            // ----set total----
            set_element_by_id('total-price', ticket_total);
            set_element_by_id('grand-total', ticket_total);
            // ---set button bg
            e.target.classList.add('bg-[#1DD100]')


            // ---selected seat-----
            set_element_by_id('selected-seat', counter)

            // ----create buy recept---
            create_items(seat.innerText, get_element_by_id('seat-price').innerText);
        }
        else {
            alert("You can't select more than 4 ticket")
        }
        
        
    })
}