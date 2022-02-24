require 'pry'

class String

  def sentence?
    self.end_with?('.') ? true : false
  end

  def question?
    self.end_with?('?') ? true : false
  end

  def exclamation?
    self.end_with?('!') ? true : false
  end

  def count_sentences
    split_arr = self.split(' ')
    count = 0
    split_arr.each do |word| 
      if word.sentence? || word.question? || word.exclamation?
        count += 1
      end
    end
    count 
  end

end