require 'cucumber'
require 'httparty'
require 'httparty/request'
require 'httparty/response/headers'
require 'rspec'
require 'date_format'
require 'faker'
require "json_matchers/rspec"

JsonMatchers.schema_root = "features/schemas/"

ENVIRONMENT = ENV['ENVIRONMENT']

CONFIG = YAML.load_file(File.dirname(__FILE__) + "/config/#{ENVIRONMENT}.yml")

Dir[File.join(File.dirname(__FILE__),
              '../services/*_services.rb')].each { |file| require_relative file }
