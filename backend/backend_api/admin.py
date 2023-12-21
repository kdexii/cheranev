from django.contrib import admin
from backend_api.models import Text
# Register your models here.

admin.site.register(Text)

class TextAdmin(admin.ModelAdmin):
    list_display = ('name', 'info')
    list_display_links = ('name', 'info')
    search_fields = ('name')
    list_editable = ('name')
    list_filter = ('name')


admin.register(Text, TextAdmin)
