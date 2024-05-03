from django.db import models

class ListModel(models.Model):
    mode = models.CharField(max_length=255, verbose_name="Request Mode")
    code = models.CharField(max_length=255, verbose_name="Request Code")
    bar_code = models.CharField(max_length=255, verbose_name="Bar Code")
    openid = models.CharField(max_length=255, verbose_name="Openid")
    create_time = models.DateTimeField(auto_now_add=True, verbose_name="Create Time")
    update_time = models.DateTimeField(auto_now=True, blank=True, null=True, verbose_name="Update Time")

    class Meta:
        db_table = 'scanner'
        verbose_name = 'Scanner'
        verbose_name_plural = "Scanner"
        ordering = ['-id']

    def __str__(self):
        model_name = self.__class__.__name__
        fields_str = ", ".join((f"{field.name}={getattr(self, field.name)}" for field in self._meta.fields))
        return f"{model_name}({fields_str})"
