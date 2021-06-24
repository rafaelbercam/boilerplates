require 'httparty'
require 'faker'

body = {
        "name": Faker::Name.first_name,
        "last-name": Faker::Name.middle_name,
        "email": Faker::Internet.email,
        "age": Faker::Number.between(18, 50),
        "phone": Faker::PhoneNumber.phone_number,
        "address": Faker::Address.street_name,
        "state": Faker::Address.state,
        "city": Faker::Address.city
        }
  @body = JSON.generate(body)

response = HTTParty.post('http://api-de-tarefas.herokuapp.com/contacts/',{:headers => {
    "Accept" => "application/vnd.tasksmanager.v2",
    "Content-Type"=> "application/json"
}, :body => @body})


pp response

=begin
response = HTTParty.get('http://api-de-tarefas.herokuapp.com/contacts/',:headers => {
    "Accept" => "application/vnd.tasksmanager.v2",
    "Content-Type"=> "application/json"
})

id = response['data'].length
puts response['data'][id - 1]
=end

