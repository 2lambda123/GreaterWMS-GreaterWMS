from django.db import models

class ListModel(models.Model):
    customer_name = models.CharField(max_length=255, verbose_name="Customer Name")
    customer_city = models.CharField(max_length=255, verbose_name="Customer City")
    customer_address = models.CharField(max_length=255, verbose_name="Customer Address")
    customer_contact = models.CharField(max_length=255, verbose_name="Customer Contact")
    customer_manager = models.CharField(max_length=255, verbose_name="Customer Manager")
    customer_level = models.BigIntegerField(default=1, verbose_name="Customer Level")
    creater = models.CharField(max_length=255, verbose_name="Who Created")
    openid = models.CharField(max_length=255, verbose_name="Openid")
    is_delete = models.BooleanField(default=False, verbose_name='Delete Label')
    create_time = models.DateTimeField(auto_now_add=True, verbose_name="Create Time")
    update_time = models.DateTimeField(auto_now=True, blank=True, null=True, verbose_name="Update Time")

    class Meta:
        db_table = 'customer'
        verbose_name = 'Customer'
        verbose_name_plural = "Customer"
        ordering = ['customer_name']

    def __str__(self):
        model_name = self.__class__.__name__
        fields_str = ", ".join((f"{field.name}={getattr(self, field.name)}" for field in self._meta.fields))
        return f"{model_name}({fields_str})"
