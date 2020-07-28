from django import forms
from django.utils.translation import gettext_lazy as _

from .base import OAuthProviderForm


class InstagramForm(OAuthProviderForm):
    key = forms.CharField(label=_("App ID"), required=False)
    secret = forms.CharField(label=_("App Secret"), required=False)
