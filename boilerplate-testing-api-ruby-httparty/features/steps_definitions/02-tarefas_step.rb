Dado("que o cliente esteja logado na API") do
    puts $payload = @login.post_login
    expect($payload).to match_json_schema("01-login_service_schema")
    $token = $payload['data']['attributes']['auth-token']
    @tarefa = Tarefa.new(@body, $token)
end

Quando("realizar a requisição para cadastrar uma nova tarefa") do
   $payload = @tarefa.post_task
   $id = $payload["data"]["id"]
   expect($payload).to match_json_schema("02-tarefas_service_schema")
end

Então("o corpo da resposta da tarefa") do
    puts $payload
end

Quando("realizar a requisição para consultar tarefas") do
    $payload = @tarefa.get_task($id)
end

Então("ao final o cliente irá deslogar da API") do
    $payload = @login.delete_logout($token)
    puts expect($payload.code).to eq(204)
end