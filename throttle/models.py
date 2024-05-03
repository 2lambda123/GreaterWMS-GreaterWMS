from django.db import models

class ListModel(models.Model):
    openid = models.CharField(max_length=255, verbose_name="Openid")
    appid = models.CharField(max_length=255, verbose_name="Appid")
    ip = models.CharField(max_length=255, verbose_name="IP")
    method = models.CharField(max_length=18, verbose_name="Method")
    t_code = models.CharField(max_length=255, verbose_name="Transaction Code")
    create_time = models.DateTimeField(auto_now_add=True, verbose_name="Create Time")

    class Meta:
        db_table = 'throttle'
        verbose_name = 'Throttle'
        verbose_name_plural = "Throttle"
        ordering = ['-id']

    def __str__(self):
        model_name = self.__class__.__name__
        fields_str = ", ".join((f"{field.name}={getattr(self, field.name)}" for field in self._meta.fields))
        return f"{model_name}({fields_str})"
