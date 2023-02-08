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
def create_questions(category)
  5.times do |count|
    question = Question.create({
      category: category,
      difficulty_level: Question::TIMER.keys.sample,
      content: "What is the number #{count} squared?"
    })
    create_answers(question)
  end
end

# Create Questions and Answers
def create_answers(question)
  correct_answer_index = [1,2,3,4].sample

  4.times do |count|
    Answer.create({
      question: question,
      is_correct_solution: (count === correct_answer_index),
      content: (count * 3)
    })
  end
end

# Create categories
[
  'Java', 'Oracle', 'AWS', 'Ruby on Rails', 'Soft Skills'
].each do |topic|
  ActiveRecord::Base.transaction do
    category = Category.create(title: topic)
    create_questions(category)
  end
end