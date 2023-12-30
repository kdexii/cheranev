# Тут хранятся все глоабльные ответы хидеров


class CustomHeaderMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response['Access-Control-Allow-Origin'] = "*"
        response['Access-Control-Allow-Headers'] = "*"
        response['Access-Control-Allow-Credentials'] = "true"
        response['Access-Control-Request-Headers'] = "X-Requested-With, content-type"
        response['Access-Control-Allow-Methods'] = "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        return response
