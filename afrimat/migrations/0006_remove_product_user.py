# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-12-10 20:09
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('afrimat', '0005_product_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='user',
        ),
    ]
