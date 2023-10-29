package 7.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 7.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Заявка
 */
@Entity(name = "IIS7Заявка")
@Table(schema = "public", name = "Заявка")
public class Zayavka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЗаявки")
    private String номерзаявки;

    @Column(name = "КодСотрудника")
    private String кодсотрудника;

    @Column(name = "КодЗаявки")
    private Integer кодзаявки;

    @Column(name = "Важность")
    private String важность;

    @Column(name = "КодКонтрагента")
    private String кодконтрагента;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontragent")
    @Convert("Kontragent")
    @Column(name = "Контрагент", length = 16, unique = true, nullable = false)
    private UUID _kontragentid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontragent", insertable = false, updatable = false)
    private Kontragent kontragent;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;


    public Zayavka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНомерЗаявки() {
      return номерзаявки;
    }

    public void setНомерЗаявки(String номерзаявки) {
      this.номерзаявки = номерзаявки;
    }

    public String getКодСотрудника() {
      return кодсотрудника;
    }

    public void setКодСотрудника(String кодсотрудника) {
      this.кодсотрудника = кодсотрудника;
    }

    public Integer getКодЗаявки() {
      return кодзаявки;
    }

    public void setКодЗаявки(Integer кодзаявки) {
      this.кодзаявки = кодзаявки;
    }

    public String getВажность() {
      return важность;
    }

    public void setВажность(String важность) {
      this.важность = важность;
    }

    public String getКодКонтрагента() {
      return кодконтрагента;
    }

    public void setКодКонтрагента(String кодконтрагента) {
      this.кодконтрагента = кодконтрагента;
    }


}