class Login
    include HTTParty
    base_uri CONFIG['base_uri']
    def initialize(headers, body)
        @options = {:headers => headers, :body => body}
    end

    def post_login
        self.class.post("/sessions", @options)
    end

    def delete_logout(token)
        self.class.delete("/sessions/#{token}",@options)
    end
end