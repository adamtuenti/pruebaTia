# Generated by Django 3.1.4 on 2021-12-31 19:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Informacion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cliente', models.CharField(max_length=50)),
                ('token', models.CharField(max_length=50)),
                ('date', models.DateField()),
            ],
        ),
    ]
