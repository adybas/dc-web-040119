class ApplicationController < ActionController::API

  def secret_key
    'h3llo'
  end

  #given a payload, it will return a token
  def encode(payload)
    JWT.encode(payload, secret_key, 'HS256')
  end

  #given a token, it will return the original payload
  def decode(token)
    JWT.decode(token, secret_key, true, { algorithm: 'HS256' })[0]
  end
end
