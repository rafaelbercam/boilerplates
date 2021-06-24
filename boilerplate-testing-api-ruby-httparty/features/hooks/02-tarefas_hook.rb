Before '@tarefas' do 
    today_time = Time.now
    body = {
        "task": {
            "title" => Faker::Lorem.characters(7),
            "description"=> Faker::Lorem.characters(15),
            "deadline": DateFormat.change_to(today_time, "GENERAL_DATE"),
            "done": true
          }
    }
    @body = JSON.generate(body)

end