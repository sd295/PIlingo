#pli6lte X5.1
# Import necessary libraries
from flask import Flask, jsonify, request
from flask_cors import CORS # Handles cross-origin requests
import random
import ast
import operator
import time
import urllib.parse

# -----------------------------------------------------------------------------
# 1. DATA STORE: All the word lists and response data are stored here.
# -----------------------------------------------------------------------------
class ChatbotData:
    """Stores all the data and word lists for the chatbot."""
    # **FIXED: Correct indentation for the __init__ method**
    def __init__(self):
        # All property assignments are now correctly indented inside __init__
        self.verbs = [
            "ask", "send", "make", "do", "agree", "adopt", "compare", "destroy", "explore",
            "discover", "create", "imagine", "encounter", "enhance", "simplify", "transform",
            "tell", "play", "sit", "meet", "get", "look", "ride", "fly", "paint", "act",
            "want", "go", "be", "have", "say", "take", "come", "give", "use", "find", "put", "mean",
            "become", "leave", "work", "need", "feel", "seem", "show", "try", "call",
            "keep", "provide", "hold", "turn", "follow", "begin", "bring", "like",
            "start", "run", "write", "set", "move", "pay", "hear", "include", "believe",
            "allow", "lead", "live", "stand", "happen", "carry", "talk", "appear",
            "produce", "offer", "remember", "win", "open", "read", "change", "continue"
        ]

        self.verbing = [v + "ing" for v in self.verbs if not v.endswith("e")] + [v[:-1] + "ing" for v in self.verbs if v.endswith("e")]

        self.beginnings = [
            "What", "How", "Why", "When", "Where", "Ok", "Let", "Since", "But",
            "Who", "Which", "Whose", "However", "Therefore", "Meanwhile", "Moreover",
            "Consequently", "Next", "First", "Although", "Because", "Unless",
            "If", "Yet", "So", "Thus"
        ]

        self.being_forms = [
            "I am", "you are", "we are", "they are", "she is", "he is",
            "it is", "I was", "you were", "he was", "she was", "it was", "we were", "they were",
            "I will be", "you will be", "he will be", "we will be", "they will be",
            "has been", "have been"
        ]

        self.endings = [
            "?", "!", ".", ",", "...",
            ";", ":", "-"
        ]

        self.future_modals = [
            "will", "may", "might", "could", "would", "should",
            "can", "shall", "must", "ought to", "have to", "is going to", "has to"
        ]

        self.greetings = [
            "Hi", "Hello", "What's Up", "Hey",
            "Good morning", "Good afternoon", "Good evening", "Yo", "Greetings"
        ]

        self.subjects = [
            "I", "you", "he", "she", "we", "they",
            "it", "this", "that", "these", "those",
            "man", "woman", "person", "group", "country", "city", "team", "president",
            "student", "family", "system", "law", "member"
        ]

        self.nouns = [
            "car", "automobile", "vehicle", "auto", "door", "house", "friend", "explorer",
            "dog", "castle", "book", "treasure", "bike", "kite", "sea", "star", "hamster",
            "cat", "parrot", "idea",
            "time", "year", "people", "way", "day", "thing", "woman", "life", "child",
            "world", "school", "state", "money", "story", "fact", "month", "side",
            "kind", "head", "power", "hour", "game", "line", "end", "office", "health",
            "art", "war", "history", "party", "result", "change", "morning", "reason",
            "teacher", "force", "ability", "accident", "advice", "airport", "atmosphere"
        ]

        self.astronomy_terms = [
            "solar system", "Sun's family", "Our solar system", "The planetary system",
            "exoplanet", "extrasolar planet", "brown dwarf", "white dwarf", "galaxy",
            "nebula", "black hole", "supernova", "asteroid", "comet", "milky way",
            "cosmic microwave background", "dark matter", "extraterrestrial", "astronomical unit"
        ]

        self.adjectives = [
            "other", "new", "good", "high", "old", "great", "big", "small", "large",
            "national", "young", "different", "black", "long", "little", "important",
            "political", "bad", "white", "real", "best", "right", "social", "public",
            "sure", "low", "early", "able", "human", "local", "late", "hard", "major",
            "better", "economic", "strong", "possible", "whole", "free", "special",
            "easy", "clear", "recent", "certain", "personal", "open", "red", "difficult",
            "available", "likely", "short", "single", "medical", "current", "wrong",
            "private", "past", "fine", "common", "poor", "natural", "significant",
            "similar", "hot", "dead", "central", "happy", "serious", "ready", "simple",
            "left", "physical", "general", "financial", "blue", "democratic", "dark",
            "various", "entire", "close", "legal", "adorable", "adventurous", "amusing",
            "classy", "gorgeous", "tiny", "enormous", "fluffy", "brave"
        ]

        self.adverbs = [
            "up", "so", "out", "just", "now", "how", "then", "more", "also", "here",
            "well", "only", "very", "even", "back", "there", "down", "still", "in",
            "as", "to", "when", "never", "really", "most", "on", "why", "about",
            "over", "again", "where", "right", "off", "always", "today", "all", "far",
            "long", "away", "yet", "often", "ever", "however", "almost", "later",
            "much", "once", "ago", "together", "around", "already", "enough", "both",
            "maybe", "actually", "probably", "home", "perhaps", "little", "else",
            "sometimes", "finally", "less", "better", "early", "especially", "quite",
            "simply", "nearly", "soon", "certainly", "quickly", "no", "recently",
            "before", "usually", "thus", "exactly", "hard", "particularly", "pretty",
            "forward", "clearly", "indeed", "rather", "tonight", "close", "suddenly",
            "best", "instead", "ahead", "fast", "alone", "eventually", "directly",
            "accidentally", "angrily", "anxiously", "awkwardly", "beautifully",
            "blindly", "boldly", "bravely", "busily", "calmly", "carefully"
        ]

        self.prepositions = [
            "in", "on", "at", "by", "for", "with", "about", "against", "between",
            "into", "through", "during", "before", "after", "above", "below", "aboard",
            "absent", "across", "along", "among", "around", "as", "atop", "behind",
            "beneath", "beside", "beyond", "down", "from", "near", "of", "off", "to",
            "toward", "under", "upon", "within", "without"
        ]

        self.conjunctions = [
            "and", "but", "for", "or", "nor", "so", "yet",
            "after", "as", "because", "before", "if", "since", "though", "unless",
            "until", "when", "where", "while", "although", "than", "that", "in order that",
            "provided that", "as long as", "even though", "whereas", "whether"
        ]

        self.prefixes = [
            "un-", "re-", "in-", "im-", "il-", "ir-", "dis-", "non-", "pre-", "post-",
            "sub-", "super-", "mid-", "inter-", "anti-", "de-", "en-", "em-", "fore-",
            "mis-", "trans-", "under-", "a-", "ante-", "retro-", "prim-"
        ]

        self.suffixes = [
            "-ing", "-ed", "-s", "-es", "-ly", "-able", "-ible", "-al", "-ial", "-er",
            "-est", "-ful", "-ic", "-ical", "-ive", "-ative", "-itive", "-less", "-ment",
            "-ness", "-ous", "-eous", "-ious", "-y", "-ty", "-ry", "-age", "-tion",
            "-ation", "-ition", "-ity", "-ship", "-ism"
        ]

        self.cars_by_year = {
            "2000": ["Subaru Impreza P1", "Ferrari 550 Barchetta", "Lamborghini Diablo VT 6.0"],
            "2001": ["Lamborghini Murciélago", "Porsche 911 GT2", "BMW M3 (E46)"],
            "2002": ["Ferrari Enzo", "Honda NSX-R", "Koenigsegg CC 8S"],
            "2003": ["Porsche Carrera GT", "Pagani Zonda C12-S", "Mercedes-Benz SLR McLaren"],
            "2004": ["Ferrari F430", "Ford GT", "Maserati MC12"],
            "2005": ["Bugatti Veyron", "Ferrari 575M Super America", "Ford GT"],
            "2006": ["Porsche 911 GT3 (997)", "Ferrari 599 GTB Fiorano", "Lamborghini Murciélago LP 640"],
            "2007": ["Audi R8 (Type 42)", "Nissan GT-R (R35 announcement)", "Mercedes-Benz SLR McLaren Roadster"],
            "2008": ["Ferrari F430 Scuderia", "Lamborghini Gallardo LP 560-4", "Pagani Zonda Cinque"],
            "2009": ["Aston Martin One-77", "Lexus LFA (pre-production)", "McLaren MP4-12C (announced)"],
            "2010": ["Bugatti Veyron Super Sport", "Porsche 911 GT2 RS (997)", "Koenigsegg Agera"],
            "2011": ["Lamborghini Aventador", "McLaren MP4-12C (production)", "Ferrari 458 Italia"],
            "2012": ["Pagani Huayra", "Porsche 911 Carrera S (991)", "SRT Viper"],
            "2013": ["McLaren P1", "Porsche 918 Spyder", "LaFerrari"],
            "2014": ["Lamborghini Huracán", "McLaren 650S", "Ferrari F12berlinetta"],
            "2015": ["Ford GT (2nd Gen revealed)", "Honda NSX (2nd Gen revealed)", "Koenigsegg Regera"],
            "2016": ["Bugatti Chiron", "Ford GT (2nd Gen production)", "Acura NSX"],
            "2017": ["McLaren 720S", "Mercedes-AMG GT R", "Porsche 911 GT2 RS (991)"],
            "2018": ["Ferrari 488 Pista", "Lamborghini Aventador SVJ", "Porsche GT3 RS (991.2)"],
            "2019": ["McLaren Speedtail", "Ferrari SF90 Stradale", "Koenigsegg Jesko"],
            "2020": ["Chevrolet Corvette Stingray (C8)", "Porsche 911 Turbo S (992)", "Ferrari Roma"]
        }

    def get_random(self, category):
        return random.choice(getattr(self, category, [""]))

    def get_random_cars(self, year, count=3):
        car_list = self.cars_by_year.get(year, ["an unknown model"])
        return random.sample(car_list, min(len(car_list), count))

# -----------------------------------------------------------------------------
# 2. CORE LOGIC
# -----------------------------------------------------------------------------
class ChatbotLogic:
    """Contains the core logic for generating chatbot responses."""
    def __init__(self):
        self.data = ChatbotData()
        self.response_rules = [
            self.handle_web_search,
            self.handle_math,
            self.handle_greetings,
            self.handle_time_query,
            self.handle_car_query,
            self.handle_mars_query,
            self.handle_story_request,
            self.handle_general_question,
            self.handle_fallback,
        ]

    def get_response(self, user_input):
        """Iterates through rules to find a matching response."""
        user_input_lower = user_input.lower()
        for rule in self.response_rules:
            response = rule(user_input, user_input_lower)
            if response is not None:
                return response
        return "I'm not sure how to respond to that. Try asking something else."

    # --- Response Rule Methods (omitted for brevity, assume they are correct) ---
    def handle_math(self, user_input, user_input_lower):
        if any(op in user_input for op in ["+", "-", "*", "/", "x"]):
            expr = user_input.replace("x", "*").replace(",", ".")
            return self._safe_eval(expr)
        return None

    def handle_greetings(self, user_input, user_input_lower):
        if any(greet in user_input_lower for greet in ["hello", "hey", "hi", "what's up"]):
            return f"{self.data.get_random('greetings')}!"
        return None

    def handle_web_search(self, user_input, user_input_lower):
        if "-m" in user_input_lower:
            query = user_input_lower.replace("-m", "").strip()
            encoded_query = urllib.parse.quote(query)
            url = f"https://www.google.com/search?q={encoded_query}"
            return f"I found a search link for '{query}': {url}"
        return None

    def handle_time_query(self, user_input, user_input_lower):
        if "what" in user_input_lower and "time" in user_input_lower:
            return f"The current server time is {time.strftime('%H:%M:%S')} UTC."
        if "what" in user_input_lower and "date" in user_input_lower:
            return f"Today's server date is {time.strftime('%Y-%m-%d')}."
        return None

    def handle_car_query(self, user_input, user_input_lower):
        if "car" in user_input_lower or "auto" in user_input_lower:
            for year in self.data.cars_by_year.keys():
                if year in user_input_lower:
                    cars = self.data.get_random_cars(year)
                    return f"Some of the best cars from {year} were the {', '.join(cars[:-1])}, and {cars[-1]}."
        return None

    def handle_mars_query(self, user_input, user_input_lower):
        if all(p in user_input_lower for p in ["mars", "planet"]):
            return (f"Mars is a planet in our {self.data.get_random('astronomy_terms')}. "
                    f"It is the fourth planet from the Sun and the second-smallest in the Solar System.")
        return None

    def handle_story_request(self, user_input, user_input_lower):
        if "tell" in user_input_lower and "story" in user_input_lower:
            noun1 = self.data.get_random('nouns')
            noun2 = self.data.get_random('nouns')
            verb = self.data.get_random('verbing')
            return f"Once upon a time, there was a {noun1} that was {verb} in a land of {noun2}s."
        return None

    def handle_general_question(self, user_input, user_input_lower):
        if any(q in user_input_lower for q in ["what", "how", "why", "who", "when", "where"]):
            return (f"That's a great question about '{user_input}'. "
                    f"{self.data.get_random('beginnings')}, {self.data.get_random('being_forms')} "
                    f"{self.data.get_random('verbing')}{self.data.get_random('endings')}")
        return None

    def handle_fallback(self, user_input, user_input_lower):
        """A generic fallback response if no other rules match."""
        return (f"I'm not sure about '{user_input}'. But I can tell you that {self.data.get_random('subjects')} "
                f"{self.data.get_random('future_modals')} be {self.data.get_random('verbing')}{self.data.get_random('endings')}")

    def _safe_eval(self, expr):
        operators_map = {ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul, ast.Div: operator.truediv}
        def _eval_node(node):
            if isinstance(node, ast.Constant):
                # Using .value for modern Python AST
                return node.value if hasattr(node, 'value') else node.n
            elif isinstance(node, ast.BinOp) and isinstance(node.op, tuple(operators_map.keys())):
                return operators_map[type(node.op)](_eval_node(node.left), _eval_node(node.right))
            else:
                raise TypeError(node)
        try:
            # Fixing for Python 3.8+ compatibility with ast.parse
            node = ast.parse(expr, mode='eval').body
            result = _eval_node(node)
            return f"The result is: {result}"
        except Exception:
            return "I couldn't solve that math problem. Please use basic operators like +, -, *, /."

# -----------------------------------------------------------------------------
# 3. SERVER SETUP: This part runs the web server using Flask.
# -----------------------------------------------------------------------------
app = Flask(__name__)
CORS(app) # **REQUIRED for the client-side POST request**
chatbot_logic = ChatbotLogic()

@app.route("/")
def home():
    # Simple message for when the root URL is accessed
    return "<h1>Chatbot Server is Running</h1><p>Use the /r/ endpoint to POST a JSON request.</p>"

# **FIXED: Route now listens for POST requests and reads from the JSON body**
@app.route('/r/', methods=['POST'])
def handle_chat_request():
    """
    Main API endpoint: Reads 'prompt' from the JSON body of a POST request,
    processes it, and returns a JSON response.
    """
    # 1. Check for JSON content type
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    # 2. Get the prompt
    data = request.get_json()
    user_input = data.get('prompt', None)

    if not user_input:
        return jsonify({"error": "Missing 'prompt' in JSON body"}), 400

    print(f"Received input: {user_input}")

    # 3. Process the request
    response_text = chatbot_logic.get_response(user_input)

    # 4. Return the response
    return jsonify({"response": response_text})