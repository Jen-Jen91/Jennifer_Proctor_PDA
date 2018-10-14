### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  #def checkforAce(card)   # Should be in snake_case with no capital, should be self.
    #if card.value = 1     # Should be ==
      return true
    else
      return false
    end
  end

  #dif highest_card(card1 card2)   # Should be def, need comma after card1, should be self.
  #if card1.value > card2.value   # Should have >= for times when value is the same for both card1 and card2
    #return card.name         # Need to put card1, and there is no .name method for card
  else
    #card2          # Should put return
  end
end
#end      # Extra end not needed

def self.cards_total(cards)
  #total            # Need to assign total a value of 0
  for card in cards
    total += card.value
    #return "You have a total of" + total     # Need to use string interpolation for total, and return should be out of for loop
  end
end

# There should be an end here for the CardGame class


```
