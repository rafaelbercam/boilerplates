Quando("realizar a requisição para logar na API") do
    puts $payload = @login.post_login
    $token = $payload['data']['attributes']['auth-token']
    expect($payload).to match_json_schema("01-login_service_schema")
end

Então("o sistema retorna o código {int}") do |status_code|
    puts expect($payload.code).to eq(status_code)
end

Então("o token da url é gerado criando a sessão") do
    puts expect($payload['data']['attributes']).to have_key("auth-token")
end

Quando("realizar a requisição para fazer logout na API") do
    puts $payload = @login.delete_logout($token)
end
  