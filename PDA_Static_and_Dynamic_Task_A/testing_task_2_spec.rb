require("minitest/autorun")
require("minitest/rg")
require_relative("./testing_task_2.rb")
require_relative("./card.rb")

class TestTask2 < MiniTest::Test

  def setup()
    @card1 = Card.new("Heart", 10)
    @card2 = Card.new("Spade", 7)
    @card3 = Card.new("Diamond", 1)
    @card4 = Card.new("Club", 7)
  end

  def test_card_has_suit()
    assert_equal("Heart", @card1.suit)
  end

  def test_card_has_value()
    assert_equal(10, @card1.value)
  end

  def test_check_for_ace__true()
    assert_equal(true, CardGame.check_for_ace(@card3))
  end

  def test_check_for_ace__false()
    assert_equal(false, CardGame.check_for_ace(@card2))
  end

  def test_highest_card__first_card()
    assert_equal(@card1, CardGame.highest_card(@card1, @card2))
  end

  def test_highest_card__second_card()
    assert_equal(@card1, CardGame.highest_card(@card2, @card1))
  end

  def test_highest_card__same()
    assert_equal(@card2, CardGame.highest_card(@card2, @card4))
  end

  def test_cards_total()
    cards = [@card1, @card2, @card3, @card4]
    assert_equal("You have a total of 25", CardGame.cards_total(cards))
  end

end
