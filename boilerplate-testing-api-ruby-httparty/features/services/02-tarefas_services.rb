class Tarefa 
    include HTTParty
    base_uri CONFIG['base_uri']

    def initialize (body, token)
        @options = {:headers => {
            "Content-Type" => "application/json",
            "Accept" => "application/vnd.taskmanager.v2",
            "Authorization" => token
        }, :body => body
    }
    end

    def post_task
        self.class.post("/tasks",@options)
    end

    def get_task(id)
        self.class.get("/tasks/#{id}",@options)
    end

end