# Generated by Django 3.1.6 on 2021-03-11 23:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20210309_1801'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mailitem',
            name='CLD',
            field=models.CharField(max_length=32, null=True),
        ),
        migrations.AlterField(
            model_name='mailitem',
            name='suffix',
            field=models.CharField(max_length=32, null=True),
        ),
        migrations.AlterField(
            model_name='mailitem',
            name='tax_year',
            field=models.DateField(null=True),
        ),
    ]