require 'json'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Answer.delete_all
Question.delete_all
Category.delete_all

# Create Questions
def create_questions(category, questions)
  questions.each do |question_data|
    data = {
      category_id: category.id,
      difficulty_level: Question::TIMER.keys.sample,
      content: question_data['content']
    }
    question = Question.create(data)
    create_answers(question, question_data['answers'])
  end
end

# Create Questions and Answers
def create_answers(question, answers)
  correct_answer_index = rand(1..4)
  data = {
    question_id: question.id
  }
  answers.each_with_index do |answer_obj, index|
    Answer.create(
      data.merge({
                   is_correct_solution: (correct_answer_index == index),
                   content: answer_obj['content']
                 })
    )
  end
end

# Create categories
json_file = File.open(Rails.root.join('data', 'data.json'))
data = JSON.load json_file

puts "> JSON file loaded\n\n"

data.first['categories'].each do |category_data|
  ActiveRecord::Base.transaction do
    category = Category.create(title: category_data['title'])
    puts "> Creating questions and answers for Category #{category.title} \n\n"
    create_questions(category, category_data['questions'])
  end
end
