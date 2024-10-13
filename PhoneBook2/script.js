// Define a Node class for linked list
class Node {
    constructor(name, phone) {
        this.name = name;  // Contact name
        this.phone = phone; // Contact phone number
        this.next = null;   // Pointer to the next node
    }
}

// Define a LinkedList class to manage the contacts
class LinkedList {
    constructor() {
        this.head = null; // Head of the linked list
    }

    // Method to add a contact
    add(name, phone) {
        const newNode = new Node(name, phone);
        if (!this.head) {
            this.head = newNode; // If list is empty, set head to new node
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse to the end of the list
            }
            current.next = newNode; // Set the next of the last node to new node
        }
        alert('Contact added successfully!');
    }

    // Method to search for a contact
    search(term) {
        let current = this.head;
        while (current) {
            if (current.name === term || current.phone === term) {
                return current; // Return found contact
            }
            current = current.next; // Move to the next node
        }
        return null; // Return null if not found
    }

    // Method to display all contacts
    display() {
        let contacts = [];
        let current = this.head;
        while (current) {
            contacts.push(`${current.name} - ${current.phone}`);
            current = current.next; // Move to the next node
        }
        return contacts.length ? contacts.join('\n') : 'No contacts available.';
    }

    // Method to delete a contact
    delete(term) {
        if (!this.head) return 'Contact not found!'; // If list is empty

        // Handle head node deletion
        if (this.head.name === term || this.head.phone === term) {
            this.head = this.head.next; // Remove head
            return 'Contact deleted successfully!';
        }

        let current = this.head;
        while (current.next) {
            if (current.next.name === term || current.next.phone === term) {
                current.next = current.next.next; // Remove contact
                return 'Contact deleted successfully!';
            }
            current = current.next; // Move to the next node
        }
        return 'Contact not found!';
    }

    // Method to update a contact
    update(term, newName, newPhone) {
        let contact = this.search(term);
        if (contact) {
            if (newName) contact.name = newName; // Update name if provided
            if (newPhone) contact.phone = newPhone; // Update phone if provided
            return 'Contact updated successfully!';
        }
        return 'Contact not found!';
    }
}

// Instantiate the LinkedList
const phonebook = new LinkedList();

// Function to add a contact using the LinkedList class
function addContact() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    phonebook.add(name, phone);
    document.getElementById('addForm').reset(); // Clear the form
}

// Function to search a contact using the LinkedList class
function searchContact() {
    const searchTerm = document.getElementById('searchTerm').value.trim();
    const result = phonebook.search(searchTerm);
    document.getElementById('searchResult').innerText = result
        ? `Found: ${result.name} - ${result.phone}`
        : 'Contact not found!';
}

// Function to display all contacts using the LinkedList class
function displayAllContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = ''; // Clear previous contacts

    const contacts = phonebook.display();
    if (contacts === 'No contacts available.') {
        alert(contacts);
        return;
    }

    contacts.split('\n').forEach(contact => {
        const li = document.createElement('li');
        li.innerText = contact;
        contactList.appendChild(li);
    });
}

// Function to delete a contact using the LinkedList class
function deleteContact() {
    const deleteTerm = document.getElementById('deleteTerm').value.trim();
    const message = phonebook.delete(deleteTerm);
    document.getElementById('deleteResult').innerText = message;
}

// Function to update a contact using the LinkedList class
function updateContact() {
    const updateTerm = document.getElementById('updateTerm').value.trim();
    const newName = document.getElementById('newName').value.trim();
    const newPhone = document.getElementById('newPhone').value.trim();

    const message = phonebook.update(updateTerm, newName, newPhone);
    document.getElementById('updateResult').innerText = message;
}
