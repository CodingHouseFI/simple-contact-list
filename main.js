'use strict';


$(function() {
  $('form.newContact').submit(addNewContact);
});


function addNewContact(e) {
  e.preventDefault();

  var contact = {
    name: $('input.name').val(),
    phone: $('input.phone').val(),
    email: $('input.email').val(),
    image: $('input.image').val()
  }

  $('input.name').val('');
  $('input.phone').val('');
  $('input.email').val('');
  $('input.image').val('');

  var $contact = $('.template').clone();
  $contact.removeClass('template');

  $contact.find('img').attr('src', contact.image);
  $contact.find('.name').text(contact.name);
  $contact.find('.phone').text(contact.phone);
  $contact.find('.email').text(contact.email);

  $('.contacts').append($contact);
}


