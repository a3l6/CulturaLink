import cohere
from cohere.responses.classify import Example
from dotenv import load_dotenv
import os

load_dotenv()
def classify(texts: str) -> str:
  co = cohere.Client(os.getenv("COHERE_API_KEY"))  # This is your trial API key
  response = co.classify(
    model='embed-english-v2.0',
    inputs=[texts],
    examples=[Example("I hate black people", "Unacceptable"),
              Example("The Holocaust needs to be repeated", "Unacceptable"), Example("I love flowers", "Acceptable"),
              Example("I don\'t like vegetables", "Acceptable"),
              Example("Mexican people are the worst", "Unacceptable"),
              Example("I\'m going on a walk today", "Acceptable"), Example("Im gonna kill you", "Unacceptable"),
              Example("I hate all jews", "Unacceptable"), Example("Kill yourself", "Unacceptable"),
              Example("I\'m gonna kill everybody", "Unacceptable"),
              Example("Fucking shit you stupid asshole", "Unacceptable"), Example("I don\'t like tacos", "Acceptable"),
              Example("I don\'t like beaners", "Unacceptable"), Example("Fuck UOFT", "Unacceptable"),
              Example("Bitch ass", "Unacceptable"), Example("Go back to your country", "Unacceptable"),
              Example("I don\'t like milk", "Acceptable"), Example("I don\'t like apples", "Acceptable"),
              Example("I like apples", "Acceptable"), Example("I hate bananas", "Acceptable"),
              Example("I hate curry munchers", "Unacceptable"),
              Example("I hate [ethnicity/religious group] because they\'re all criminals and should be deported!",
                      "Unacceptable"),
              Example("Women belong in the kitchen, not in positions of power", "Unacceptable"),
              Example("People with disabilities are a burden on society and should be euthanized", "Unacceptable"),
              Example("LGBTQ+ individuals are unnatural and should be \'fixed\' through conversion therapy.",
                      "Unacceptable"),
              Example("All Muslims are terrorists and should be banned from entering our country", "Unacceptable"),
              Example("Jews control the media and the economy, spreading lies and manipulating society.",
                      "Unacceptable"),
              Example("Black people are lazy and only want handouts from the government", "Unacceptable"),
              Example("Transgender people are mentally ill and should be treated as such, not encouraged",
                      "Unacceptable"),
              Example("Indigenous people are primitive and should assimilate into modern society", "Unacceptable"),
              Example("Refugees are invaders who will bring crime and disease to our country", "Unacceptable"),
              Example("Fat people are disgusting and should be shamed into losing weight", "Unacceptable"),
              Example("Autistic people are freaks and should be institutionalized", "Unacceptable"), Example(
        "The LGBTQ+ community is pushing an agenda to corrupt our children and destroy traditional values",
        "Unacceptable"),
              Example("Asians are sneaky and untrustworthy; they\'ll stab you in the back without hesitation",
                      "Unacceptable"), Example(
        "The Amazon rainforest is the largest tropical rainforest in the world, covering approximately 5.5 million square kilometers across nine countries in South America",
        "Acceptable"), Example(
        "I believe that implementing stricter gun control laws will help reduce gun violence and save lives.",
        "Unacceptable"), Example(
        "Today, let\'s remember the words of Martin Luther King Jr.: \'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.\' Let\'s strive to be the light and spread love in our communities",
        "Acceptable"), Example(
        "In today\'s biology class, we\'ll be learning about photosynthesis, the process by which plants convert light energy into chemical energy to fuel their growth",
        "Acceptable"), Example(
        "No matter how many times you\'ve failed, never give up on your dreams. Remember, every setback is just a setup for a comeback. Keep pushing forward and success will be within your reach",
        "Acceptable"), Example(
        "The Industrial Revolution, which began in the late 18th century, was a period of major technological advancements that transformed society, leading to urbanization, economic growth, and changes in manufacturing processes",
        "Acceptable"), Example("I don\'t like broccoli", "Acceptable"),
              Example("I don\'t like pineapple on pizza.", "Acceptable"),
              Example("I don\'t like horror movies.", "Acceptable"), Example("I don\'t like olives.", "Acceptable"),
              Example("I don\'t  like curry", "Acceptable"), Example("I immigrated from a country", "Acceptable")])
  #print('The confidence levels of the labels are: {}'.format(response.classifications))

  return response.classifications[0].predictions[0]

if __name__ == "__main__":
    print(classify("I dont like tacos"))
