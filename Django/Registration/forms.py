from django import forms
from .models import User


class SignupForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["birth_year", "birth_month", "birth_date", ]

    def signup(self, request, user):
        user.birth_year = self.cleaned_data["birth_year"]
        user.birth_month = self.cleaned_data["birth_month"]
        user.birth_date = self.cleaned_data["birth_date"]
        user.save()