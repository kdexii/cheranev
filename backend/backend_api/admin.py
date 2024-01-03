from django.contrib import admin
from backend_api.models import Project
# Register your models here.

admin.site.register(Project)

class TextAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
    list_display_links = ('title', 'description')
    search_fields = ('title')
    list_editable = ('title')
    list_filter = ('title')


class TextAdminImages(admin.ModelAdmin):
    list_display = ('title', 'description')
    list_display_links = ('title', 'description')
    search_fields = ('title')
    list_editable = ('title')
    list_filter = ('title')

admin.register(Project, TextAdmin)
